import { SignUp } from "@clerk/nextjs";
import AuthShell from "@/components/AuthShell";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up your Droply account and start uploading in minutes."
    >
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            card: "shadow-none border border-default-200 bg-default-50",
            headerTitle: "text-default-900",
            headerSubtitle: "text-default-500",
            formButtonPrimary: "bg-primary hover:bg-primary-600 text-white",
            formFieldInput:
              "bg-default-100 border-default-200 focus:border-primary",
            footerActionLink: "text-primary hover:text-primary-600",
          },
        }}
      />
    </AuthShell>
  );
}
