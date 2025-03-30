import React from "react";
import Wrapper from "./Wrapper";
import Toggle, { ToggleSkelaton } from "./Toggle";
import Recommended, { RecommendedSkelaton } from "./recommended";
import { getRecommended } from "@/services/recommended-service";
import { getFollowedUsers } from "@/services/follow-service";
import Following, { FollowingSkelaton } from "./Following";

const Sidebar = async () => {
  const recommended = await getRecommended();
  const following = await getFollowedUsers();

  return (
    <Wrapper>
      <Toggle />

      <div className="space-y-4 pt-4 lg:pt-0">
        <Following data={following} />
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;

export const SidebarSkelaton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkelaton />
      <FollowingSkelaton />
      <RecommendedSkelaton />
    </aside>
  );
};
