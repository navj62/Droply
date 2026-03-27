import AuthShell from "@/components/AuthShell";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to manage your files quickly and securely."
    >
      <SignInForm />
    </AuthShell>
  );
}
