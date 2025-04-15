import css from "./index.module.css";
import global from "@/app/globals.module.css";
import clsx from "clsx";
import next from "next";

const params = new Set(['slug', 'title', 'tagsDisplayed', 'poster'])

const CasesList: React.FC = async () => {
  const res = await fetch("https://api.cms.chulakov.dev/page/work?limit=15", {
    next: { revalidate: 10 },
  });

  if (!res){
   throw new Error("Faild to load")
  }

  const data = await res.json();

  console.log(data)


  const filteredData = data.items.map( (item: Record<string, any>) => 
   Object.fromEntries(
      Object.entries(item).filter(([key]) => params.has(key))
   )
  )

  console.log('filtered', filteredData)

  return (
  <section className={clsx(css.section, global.section)}>
   
  </section>
  );
};

export default CasesList;
