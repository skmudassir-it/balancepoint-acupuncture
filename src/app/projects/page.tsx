import type { Metadata } from "next";
import { ProjectsClient } from "@/components/ProjectsClient";

export const metadata: Metadata = {
  title: "Success Stories — BalancePoint Acupuncture",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
