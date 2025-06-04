interface HomeButtonProps {
  title: string;
  personalizado: boolean;
  width?: string;
  height?: string;
  bk_color?: string;
  color?: string;
}

export default function HomeButton({
  title,
  personalizado,
  width,
  height,
  bk_color,
  color,
}: HomeButtonProps) {
  return personalizado ? (
    <button
      style={{
        backgroundColor: bk_color || "#f1f1f1",
        color: color || "#ff0000",
        width: width || "20px",
        height: height || "10px",
      }}
    >
      {title}
    </button>
  ) : (
    <button>{title}</button>
  );
}
