import { useEffect, useState } from "react";
// api
import getGroups from "@/api/cms/get-groups";
// components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function UserGroupSelect({ data, setData, error }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function get() {
      const list = await getGroups();

      setList(list.results);
    }

    get();
  }, []);

  return (
    <Select
      name="group"
      id="group"
      error={error}
      value={data}
      onValueChange={(value) => setData(value)}
    >
      <SelectTrigger>
        <SelectValue placeholder="سمت انتخاب کنید" />
      </SelectTrigger>
      <SelectContent>
        {list.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
