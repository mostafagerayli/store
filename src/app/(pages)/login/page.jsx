import LoginPage from "@/app/components/page/login/LoginPage";
import Header from "@/app/layout/Header";
import { prisma } from "@/app/lib/prisma";

export default async function Login() {
  console.log(await prisma.users.findMany());
  return (
    <>
      <Header />
      <LoginPage />
    </>
  );
}
