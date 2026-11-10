import { Avatar } from "@heroui/react";

export default function UserAvatar({ user }) {
  return (
    <Avatar className="size-9 border-2 border-gray-300">
      <Avatar.Image
        alt={user?.name || "User"}
        src={user?.image || undefined}
        referrerPolicy="no-referrer"
      />

      <Avatar.Fallback>
        {user?.name?.slice(0, 2).toUpperCase() || "U"}
      </Avatar.Fallback>
    </Avatar>
  );
}