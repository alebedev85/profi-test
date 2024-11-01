import styles from "./SupportBadge.module.scss";

interface SupportBadgeProps {
  label: string;
  text: string;
  className?: string;
}

const SupportBadge = ({ label, text }: SupportBadgeProps) => {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default SupportBadge;
