import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Rings
        visible={true}
        width="80"
        color="#4fa94d"
        ariaLabel="rings-loading"
      />
    </div>
  );
}
