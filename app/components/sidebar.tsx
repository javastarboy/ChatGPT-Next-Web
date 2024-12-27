import React, { useEffect, useRef, useMemo, useState, Fragment } from "react";

import styles from "./home.module.scss";

import { IconButton } from "./button";
import SettingsIcon from "../icons/settings.svg";
import GithubIcon from "../icons/github.svg";
import ChatGptIcon from "../icons/chatgpt.svg";
import AddIcon from "../icons/add.svg";
import DeleteIcon from "../icons/delete.svg";
import MaskIcon from "../icons/mask.svg";
import DragIcon from "../icons/drag.svg";
import DiscoveryIcon from "../icons/discovery.svg";
import NoticeIcon from "../icons/notice.svg"; // 引入公告图标

import Locale from "../locales";

import { useAppConfig, useChatStore } from "../store";

import {
  DEFAULT_SIDEBAR_WIDTH,
  MAX_SIDEBAR_WIDTH,
  MIN_SIDEBAR_WIDTH,
  NARROW_SIDEBAR_WIDTH,
  Path,
  PLUGINS,
  REPO_URL,
} from "../constant";

import { Link, useNavigate } from "react-router-dom";
import { isIOS, useMobileScreen } from "../utils";
import dynamic from "next/dynamic";
import { showConfirm, showToast, Modal, Selector } from "./ui-lib"; // 引入Modal组件
import clsx from "clsx";

const ChatList = dynamic(async () => (await import("./chat-list")).ChatList, {
  loading: () => null,
});

export function useHotKey() {
  const chatStore = useChatStore();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey) {
        if (e.key === "ArrowUp") {
          chatStore.nextSession(-1);
        } else if (e.key === "ArrowDown") {
          chatStore.nextSession(1);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });
}

export function useDragSideBar() {
  const limit = (x: number) => Math.min(MAX_SIDEBAR_WIDTH, x);

  const config = useAppConfig();
  const startX = useRef(0);
  const startDragWidth = useRef(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
  const lastUpdateTime = useRef(Date.now());

  const toggleSideBar = () => {
    config.update((config) => {
      if (config.sidebarWidth < MIN_SIDEBAR_WIDTH) {
        config.sidebarWidth = DEFAULT_SIDEBAR_WIDTH;
      } else {
        config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
      }
    });
  };

  const onDragStart = (e: MouseEvent) => {
    // Remembers the initial width each time the mouse is pressed
    startX.current = e.clientX;
    startDragWidth.current = config.sidebarWidth;
    const dragStartTime = Date.now();

    const handleDragMove = (e: MouseEvent) => {
      if (Date.now() < lastUpdateTime.current + 20) {
        return;
      }
      lastUpdateTime.current = Date.now();
      const d = e.clientX - startX.current;
      const nextWidth = limit(startDragWidth.current + d);
      config.update((config) => {
        if (nextWidth < MIN_SIDEBAR_WIDTH) {
          config.sidebarWidth = NARROW_SIDEBAR_WIDTH;
        } else {
          config.sidebarWidth = nextWidth;
        }
      });
    };

    const handleDragEnd = () => {
      // In useRef the data is non-responsive, so `config.sidebarWidth` can't get the dynamic sidebarWidth
      window.removeEventListener("pointermove", handleDragMove);
      window.removeEventListener("pointerup", handleDragEnd);

      // if user click the drag icon, should toggle the sidebar
      const shouldFireClick = Date.now() - dragStartTime < 300;
      if (shouldFireClick) {
        toggleSideBar();
      }
    };

    window.addEventListener("pointermove", handleDragMove);
    window.addEventListener("pointerup", handleDragEnd);
  };

  const isMobileScreen = useMobileScreen();
  const shouldNarrow =
    !isMobileScreen && config.sidebarWidth < MIN_SIDEBAR_WIDTH;

  useEffect(() => {
    const barWidth = shouldNarrow
      ? NARROW_SIDEBAR_WIDTH
      : limit(config.sidebarWidth ?? DEFAULT_SIDEBAR_WIDTH);
    const sideBarWidth = isMobileScreen ? "100vw" : `${barWidth}px`;
    document.documentElement.style.setProperty("--sidebar-width", sideBarWidth);
  }, [config.sidebarWidth, isMobileScreen, shouldNarrow]);

  return {
    onDragStart,
    shouldNarrow,
  };
}
export function SideBarContainer(props: {
  children: React.ReactNode;
  onDragStart: (e: MouseEvent) => void;
  shouldNarrow: boolean;
  className?: string;
}) {
  const isMobileScreen = useMobileScreen();
  const isIOSMobile = useMemo(
    () => isIOS() && isMobileScreen,
    [isMobileScreen],
  );
  const { children, className, onDragStart, shouldNarrow } = props;
  return (
    <div
      className={clsx(styles.sidebar, className, {
        [styles["narrow-sidebar"]]: shouldNarrow,
      })}
      style={{
        // #3016 disable transition on ios mobile screen
        transition: isMobileScreen && isIOSMobile ? "none" : undefined,
      }}
    >
      {children}
      <div
        className={styles["sidebar-drag"]}
        onPointerDown={(e) => onDragStart(e as any)}
      >
        <DragIcon />
      </div>
    </div>
  );
}

export function SideBarHeader(props: {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  logo?: React.ReactNode;
  children?: React.ReactNode;
  shouldNarrow?: boolean;
}) {
  const { title, subTitle, logo, children, shouldNarrow } = props;
  return (
    <Fragment>
      <div
        className={clsx(styles["sidebar-header"], {
          [styles["sidebar-header-narrow"]]: shouldNarrow,
        })}
        data-tauri-drag-region
      >
        <div className={styles["sidebar-title-container"]}>
          <div className={styles["sidebar-title"]} data-tauri-drag-region>
            {title}
          </div>
          <div className={styles["sidebar-sub-title"]}>{subTitle}</div>
        </div>
        <div className={clsx(styles["sidebar-logo"], "no-dark")}>{logo}</div>
      </div>
      {children}
    </Fragment>
  );
}

export function SideBarBody(props: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
  const { onClick, children } = props;
  return (
    <div className={styles["sidebar-body"]} onClick={onClick}>
      {children}
    </div>
  );
}

export function SideBarTail(props: {
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}) {
  const { primaryAction, secondaryAction } = props;

  return (
    <div className={styles["sidebar-tail"]}>
      <div className={styles["sidebar-actions"]}>{primaryAction}</div>
      <div className={styles["sidebar-actions"]}>{secondaryAction}</div>
    </div>
  );
}

export function SideBar(props: { className?: string }) {
  useHotKey();
  const { onDragStart, shouldNarrow } = useDragSideBar();
  const [showPluginSelector, setShowPluginSelector] = useState(false);
  const [showDialog, setShowDialog] = useState(true); // 控制公告弹窗的显示状态
  const isMobileScreen = useMobileScreen();
  const navigate = useNavigate();
  const config = useAppConfig();
  const chatStore = useChatStore();

  return (
    <SideBarContainer
      onDragStart={onDragStart}
      shouldNarrow={shouldNarrow}
      {...props}
    >
      <SideBarHeader
        title="AGI舰长 Next版"
        subTitle={
          <>
            <a
              href="https://oss.javastarboy.com/agi/%E5%BE%AE%E4%BF%A1%E4%BA%A4%E6%B5%81%E7%BE%A4.png"
              target="_blank"
            >
              点我加入 AI 交流群！
            </a>
          </>
        }
        logo={<ChatGptIcon />}
        shouldNarrow={shouldNarrow}
      >
        <div className={styles["sidebar-header-bar"]}>
          <IconButton
            icon={<MaskIcon />}
            text={shouldNarrow ? undefined : Locale.Mask.Name}
            className={styles["sidebar-bar-button"]}
            onClick={() => {
              if (config.dontShowMaskSplashScreen !== true) {
                navigate(Path.NewChat, { state: { fromHome: true } });
              } else {
                navigate(Path.Masks, { state: { fromHome: true } });
              }
            }}
            shadow
          />
          <IconButton
            icon={<DiscoveryIcon />}
            text={shouldNarrow ? undefined : Locale.Discovery.Name}
            className={styles["sidebar-bar-button"]}
            onClick={() => setShowPluginSelector(true)}
            shadow
          />
        </div>
        {showPluginSelector && (
          <Selector
            items={[
              ...PLUGINS.map((item) => {
                return {
                  title: item.name,
                  value: item.path,
                };
              }),
            ]}
            onClose={() => setShowPluginSelector(false)}
            onSelection={(s) => {
              navigate(s[0], { state: { fromHome: true } });
            }}
          />
        )}
      </SideBarHeader>
      <SideBarBody
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            navigate(Path.Home);
          }
        }}
      >
        <ChatList narrow={shouldNarrow} />
      </SideBarBody>
      <SideBarTail
        primaryAction={
          <>
            <div className={clsx(styles["sidebar-action"], styles.mobile)}>
              <IconButton
                icon={<DeleteIcon />}
                onClick={async () => {
                  if (await showConfirm(Locale.Home.DeleteChat)) {
                    chatStore.deleteSession(chatStore.currentSessionIndex);
                  }
                }}
              />
            </div>
            <div className={styles["sidebar-action"]}>
              <Link to={Path.Settings}>
                <IconButton
                  aria={Locale.Settings.Title}
                  icon={<SettingsIcon />}
                  shadow
                />
              </Link>
            </div>
            {/* 如果不需要 GitHub 图标，可以注释或删除以下代码 */}
            <div className={styles["sidebar-action"]}>
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <IconButton
                  aria={Locale.Export.MessageFromChatGPT}
                  icon={<GithubIcon />}
                  shadow
                />
              </a>
            </div>
          </>
        }
        secondaryAction={
          <>
            <IconButton
              style={{ marginRight: '8px' }}
              icon={<NoticeIcon />}
              text={shouldNarrow ? undefined : Locale.Notice.Name}
              className={`${styles["sidebar-bar-button"]} ${styles["centered-button"]}`}
              onClick={() => {
                setShowDialog(true); // 展示公告弹窗
                console.log("showDialog===" + showDialog);
              }}
              shadow
            /> 
            <IconButton
              icon={<AddIcon />}
              text={shouldNarrow ? undefined : Locale.Home.NewChat}
              onClick={() => {
                if (config.dontShowMaskSplashScreen) {
                  chatStore.newSession();
                  navigate(Path.Chat);
                } else {
                  navigate(Path.NewChat);
                }
              }}
              shadow
            />
          </>
        }
      />

      {/* 公告弹窗 */}
      {showDialog && (
        <div className="modal-mask">
          <Modal
            title={
              "📣 公 告 | 领航AGI聚合平台、国内外【AI工具集导航】网站、正式上线啦 🎉🎉🎉"
            }
            onClose={() => setShowDialog(false)}
            actions={[
              <IconButton
                key="close"
                bordered
                text={"关闭"}
                onClick={() => {
                  setShowDialog(false);
                  console.log("showDialog2===" + showDialog);
                }}
              />,
              <IconButton
                key="talk"
                bordered
                text={"交流"}
                onClick={() => {
                  window.open(
                    "https://oss.javastarboy.com/agi/%E4%B8%AA%E4%BA%BA%E4%BC%81%E5%BE%AE%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
                    "_blank",
                  );
                }}
              />,
              <IconButton
                key="support"
                bordered
                text={"赞助"}
                onClick={() => {
                  window.open(
                    "https://oss.javastarboy.com/agi/%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%AC%BE%E7%A0%81.jpeg",
                    "_blank",
                  );
                }}
              />,
              <IconButton
                key="knowledge"
                bordered
                text={"AI知识库"}
                onClick={() => {
                  window.open("https://www.yuque.com/lhyyh/ai/readme", "_blank");
                }}
              />,
              <IconButton
                key="knowledge"
                bordered
                text={"AIGC证书"}
                onClick={() => {
                  window.open("https://www.yuque.com/lhyyh/ai/ins6gx3o7hck7shb", "_blank");
                }}
              />,
              <IconButton
                key="community"
                bordered
                text={"AI全栈通识课"}
                onClick={() => {
                  window.open("https://oss.javastarboy.com/agi/%E5%BE%AE%E4%BF%A1H5%EF%BC%88%E6%B5%B7%E8%B1%9A%E7%9F%A5%E9%81%93%EF%BC%89.jpg", "_blank");
                }}
              />,
              <IconButton
                key="community"
                bordered
                text={"AI工具集导航"}
                onClick={() => {
                  window.open("https://tools.lhagi.com/", "_blank");
                }}
              />,
            ]}
          >
            <div className={styles["markdown-body"]}>
              ✅ 国内外【AI工具集导航】网址大全 ▶{" "}
              <a
                href="https://tools.lhagi.com/"
                target="_blank"
              >
                ✅ 立即前往（每个菜单下还细分了二级分类）
              </a>
              <br /><br />
              ✅ 领航AGI大模型聚合平台 ▶{" "}
              <a
                href="https://javastarboy.com"
                target="_blank"
              >
                ✅ 立即前往
              </a>
              <br /><br />
              ✅ 领航AGI AIGC 大模型『聚合平台』正式上线啦，开箱即用 🎉🎉🎉{" 支持功能如下👇 "}
              <br />{" "}
              <span style={{ color: "purple" }}>
                {'    '}👍🏻 个人 API_Key 管理，消费日志查询，数据看板、模型管理！<br />
                {'    '}👍🏻 高额邀请奖励， 额度用不完！<br />
                {'    '}👍🏻 集成了当下最火的几款 AI 工具，满足所有人喜好，总有一款适合你！<br />
                {'    '}👍🏻 支持 Midjourney 绘画、Suno音乐、AI视频！<br />
                {'    '}👍🏻 安全、稳定、高并发，最牛的AI聚合中转站，可用于个人网站！<br />
              </span>

              <br />✅ 交个朋友，@AGI舰长介绍 ▶{" "}
              <a
                href="https://www.yuque.com/lhyyh/ai/readme"
                target="_blank"
              >
                【AI全栈工程师的简介】
              </a>
            </div>
          </Modal>
        </div>
      )}
    </SideBarContainer>
  );
}
