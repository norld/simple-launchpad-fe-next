import Link from "next/link";
import { EXPLORER_HREF } from "src/configs/constants";

export const ProcessNotify = ({ hash }) => {
  console.log("@ProcessNotify", hash);
  return (
    <div className="font-bold underline">
      <Link href={`${EXPLORER_HREF}/tx/${hash}`}>
        <a target="_blank">See your Transaction Here!</a>
      </Link>
    </div>
  );
};

export const ErrorNotify = ({ err }) => {
  return <div className="font-bold underline bg-danger">{err}</div>;
};
