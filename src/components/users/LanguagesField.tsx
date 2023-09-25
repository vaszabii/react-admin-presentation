import { useRecordContext } from "react-admin";

import { Chip } from "@mui/material";

const LanguagesField = () => {
  const record = useRecordContext();
  return (
    <>
      {record.language.map((item: string) => (
        <Chip label={item} key={item} />
      ))}
    </>
  );
};

export default LanguagesField;
