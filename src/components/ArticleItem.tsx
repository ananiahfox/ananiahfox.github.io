import DateSvg from "../assets/icon/date.svg";
import type { ArticleItemComponent } from "../type/data.type";
import _ from "lodash";
import { For } from "solid-js";

export const ArticleItem: ArticleItemComponent = ({ article }) => {
  return (
    <div class="w-full">
      <For each={article.value}>
        {(item) => (
          <div class="flex pt-3 pl-8 box-border">
            <div class="sm:w-24 md:w-24 lg:w-24 h-6 flex justify-between items-center ">
              <img src={DateSvg} width={16} alt="date" />
              <span class="text-slate-500 text-xs whitespace-nowrap">
                {item.time}
              </span>
            </div>
            <p
              class="
          w-11/12
          flex-initial
          text-sm
          border-b 
          border-transparent 
          text-slate-400
          cursor-pointer
          sm: px-6 
          md:px-6
          lg:px-4
          box-border
          leading-6"
            >
              {item.title}
            </p>
          </div>
        )}
      </For>
    </div>
  );
};
