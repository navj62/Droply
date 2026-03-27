import AuthShell from "@/components/AuthShell";
import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Set up your Droply account and start uploading in minutes."
    >
      <SignUpForm />
    </AuthShell>
  );
}
