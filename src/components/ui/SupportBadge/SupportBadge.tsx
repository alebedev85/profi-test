import styles from "./SupportBadge.module.scss";

interface ISupportBadgeProps {
  label: string;
  text: string;
}

export default function SupportBadge({ label, text }: ISupportBadgeProps) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
