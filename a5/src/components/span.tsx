"use client";

interface SpanProps {
  status: string;
}

export default function Span({ status }: SpanProps) {
  return (
    <span>
      {status}
      <style jsx>
        {`
          .badge {
            background: ${status === "success" ? "#00FF00" : "#FF0000"};
            padding: 2px;
          }
        `}
      </style>
    </span>
  );
}
