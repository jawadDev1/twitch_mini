import React from "react";
import Link from "next/link";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Actions = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      <Button
        size={"sm"}
        variant={"ghost"}
        className="text-muted-foreground hover:text-primary"
        asChild
      >
        <Link href={"/"}>
          <LogOut className="size-5 mr-2" />
          Exit
        </Link>
      </Button>

      <UserButton afterSwitchSessionUrl="/" />
    </div>
  );
};

export default Actions;
