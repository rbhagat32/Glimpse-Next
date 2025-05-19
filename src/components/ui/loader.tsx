import styles from "@/styles/loader.module.css";

export default function Loader() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className={styles.loader} />
    </div>
  );
}
