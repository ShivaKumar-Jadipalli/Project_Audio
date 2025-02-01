"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../tremor/DropDownMenu";

export default function DropdownMenuSimpleExample() {
  return (
    <div className="flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex -space-x-2 overflow-hidden">
            <img
              alt=""
              src="/avatars/Owner.jpg"
              className="inline-block size-16 rounded-full ring-2 ring-white"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem shortcut="⌘S">Account Settings</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem hint="Pro">Manage workspace</DropdownMenuItem>

            <DropdownMenuItem shortcut="⌘T">New Workspace</DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem shortcut="⇧⌘Q">Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
