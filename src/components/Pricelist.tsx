import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import * as XLSX from "xlsx";

export function Pricelist() {
  const [data, setData] = useState<any[] | null>(null);
  const [age, setAge] = useState<number>(25); //initial age
  const [gender, setGender] = useState<string>("");

  type Row = [...any[]]; // first col is the age range like "12-45"

  useEffect(() => {
    setTimeout(() => {
      setData(null);
    }, 300); //set data to null first to show loading state if user change

    const fetchData = async () => {
      const res = await fetch(encodeURI("/Tabel Premi.xlsx"));
      const buf = await res.arrayBuffer();
      const wb = XLSX.read(buf, { type: "array" });
      const ws = wb.Sheets[gender];
      const allData = XLSX.utils.sheet_to_json<Row>(ws, {
        header: 1,
        defval: "",
      }); //defval ="" to avoid 'undefined' cells when empty
      const filteredByGender = allData.slice(2);
      const firstRegex = /^\d+/;
      const lastRegex = /\d+$/;
      setData(
        filteredByGender.filter(
          (
            row //filter rows based on age range
          ) =>
            Number(row[0]?.match(firstRegex)) <= age &&
            Number(row[0].match(lastRegex)) >= age
        )
      );
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timer); //cleanup function to clear timer on unmount
  }, [age, gender]);

  return (
    <section
      id="pricelist"
      className="relative pt-8 w-full gap-y-8 min-h-screen flex flex-col items-center bg-primary/7"
    >
      <Label>Pilih Gender:</Label>
      <Select onValueChange={(val) => setGender(val)}>
        {" "}
        {/* val si always a string that dont return value*/}
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Laki-laki</SelectItem>
          <SelectItem value="female">Perempuan</SelectItem>
        </SelectContent>
      </Select>
      {gender && (
        <div className="gap-y-6 flex flex-col items-center w-full">
          <Label>Sesuaikan Usia Anda:</Label>
          <Slider
            defaultValue={[age]}
            max={70}
            step={1}
            onValueChange={(v) => setAge(v[0])}
            className="w-1/2 lg:w-1/4"
          />
          <span>{age}</span>

          <Table className="w-4/5 border-separate border-4 text-center mx-auto">
            <TableCaption>Tabel Premi Asuransi Kesehatan</TableCaption>
            <TableHeader className="bg-blue-300">
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-center" rowSpan={2}>
                  Usia (tahun)
                </TableHead>
                <TableHead className="text-center" rowSpan={2}>
                  Harga/tahun
                </TableHead>
                <TableHead className="text-center" colSpan={3}>
                  Wilayah Cover
                </TableHead>
                <TableHead className="text-center" colSpan={2}>
                  Tipe Kamar
                </TableHead>
                <TableHead className="text-center" rowSpan={2}>
                  Limit per tahun
                </TableHead>
                <TableHead className="text-center" rowSpan={2}>
                  Booster
                </TableHead>
              </TableRow>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-center">Indonesia</TableHead>
                <TableHead className="text-center">
                  Asia (kecuali SG, HK, JP)
                </TableHead>
                <TableHead className="text-center">Asia</TableHead>
                <TableHead className="text-center">1 Tempat Tidur</TableHead>
                <TableHead className="text-center">2 Tempat Tidur</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(data ?? []).map((el) => (
                <TableRow className="odd:bg-white even:bg-gray-100" key={el[0]}>
                  <TableCell>{el[0]}</TableCell>
                  <TableCell>{el[1].toLocaleString("id-ID")}</TableCell>
                  <TableCell>{el[2]}</TableCell>
                  <TableCell>{el[3]}</TableCell>
                  <TableCell>{el[4]}</TableCell>
                  <TableCell>{el[5]}</TableCell>
                  <TableCell>{el[6]}</TableCell>
                  <TableCell>{el[7]}</TableCell>
                  <TableCell>{el[8]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
}
//initialValue is starting value of stateVariable (only run on 1st render)
