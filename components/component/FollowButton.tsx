import React from "react";
import { Button } from "../ui/button";

interface FollowButtonProps {
  isCurrentUser: boolean;
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ isCurrentUser, isFollowing }) => {
  // ボタンのテキストを取得する関数
  const getButtonContent = () => {
    if (isCurrentUser) {
      return "プロフィール編集";
    }
    if (isFollowing) {
      return "フォロー中";
    } else {
      return "フォローする";
    }
  };

  // ボタンのデザインバリアントを取得する関数
  const getButtonVariant = () => {
    if (isCurrentUser) {
      return "secondary";
    }
    if (isFollowing) {
      return "outline"; // 修正: "autoline" は存在しないため "outline" を使用
    } else {
      return "default";
    }
  };

  return (
    <div>
      <Button variant={getButtonVariant()} className="w-full">
        {getButtonContent()}
      </Button>
    </div>
  );
};

export default FollowButton;
