"use client";

import React from 'react';
import { BiCopy } from "react-icons/bi";
import { DropdownMenuItem } from "@/components/shadcn/ui/dropdown-menu";

const CopyLinkDropdownMenuItem = () => {
  
  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  }
  
  return (
    <DropdownMenuItem
      className="flex gap-2 items-center hover:cursor-pointer"
      onClick={() => copyLink()}
    >
      <BiCopy/> Copy Link
    </DropdownMenuItem>
  );
};

export default CopyLinkDropdownMenuItem;
