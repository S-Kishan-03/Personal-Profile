import { profileData } from '@/lib/profile-data';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto max-w-5xl px-4 py-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
