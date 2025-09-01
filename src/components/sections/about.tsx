import { Section } from "@/components/section";
import { profileData } from "@/lib/profile-data";

export default function AboutSection() {
  return (
    <Section id="about" title="About Me">
      <div className="space-y-8">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {profileData.summary}
        </p>
      </div>
    </Section>
  );
}
