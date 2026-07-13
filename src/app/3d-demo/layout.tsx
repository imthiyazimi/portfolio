import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Effects Demo | Mohammed Imthiyaz A",
  description: "Interactive 3D effects showcase using Three.js and React Three Fiber",
};

export default function ThreeDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
