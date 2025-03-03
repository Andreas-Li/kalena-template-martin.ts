import { createRoute } from "@kalena/framework";
import { isPublic } from "@permissions/public.ts";
import { BaseLayout } from "@comp/layout/BaseLayout.tsx";
import { Text } from "@comp/content/Text.tsx";

const Home = () => {
  return (
    <BaseLayout title="Home">
      <Text>Home is where home isssssss</Text>
    </BaseLayout>
  );
};

export const homeRoute = createRoute({
  path: "/",
  component: Home,
  permission: {
    check: isPublic,
    redirectPath: "/",
  },
  partial: false,
  hmr: true,
});
