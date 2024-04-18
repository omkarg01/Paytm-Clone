import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

import { PrismaClient } from '@repo/db/client'
const prisma = new PrismaClient()


export default function Page(): JSX.Element {
  return (
    <div className="text-3xl">
      Hi there!
    </div>
  );
}
