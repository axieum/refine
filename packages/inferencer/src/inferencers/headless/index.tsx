import React from "react";
import { useResource } from "@refinedev/core";

import { ShowInferencer } from "./show.js";
import { ListInferencer } from "./list.js";
import { CreateInferencer } from "./create.js";
import { EditInferencer } from "./edit.js";

import type { InferencerComponentProps } from "../../types/index.js";

const HeadlessInferencer: React.FC<InferencerComponentProps> = ({
  action: actionFromProps,
  id: idFromProps,
  ...props
}) => {
  const { action, id } = useResource();

  switch (actionFromProps ?? action) {
    case "show":
      return <ShowInferencer {...props} id={idFromProps ?? id} />;
    case "create":
      return <CreateInferencer {...props} id={idFromProps ?? id} />;
    case "edit":
      return <EditInferencer {...props} id={idFromProps ?? id} />;
    default:
      return <ListInferencer {...props} id={idFromProps ?? id} />;
  }
};

export { HeadlessInferencer };
export {
  ListInferencer as HeadlessListInferencer,
  renderer as HeadlessListRenderer,
} from "./list.js";
export {
  ShowInferencer as HeadlessShowInferencer,
  renderer as HeadlessShowRenderer,
} from "./show.js";
export {
  EditInferencer as HeadlessEditInferencer,
  renderer as HeadlessEditRenderer,
} from "./edit.js";
export {
  CreateInferencer as HeadlessCreateInferencer,
  renderer as HeadlessCreateRenderer,
} from "./create.js";
export * from "../../types/index.js";
