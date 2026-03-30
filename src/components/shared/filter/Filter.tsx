import SelectingDegree from "@/components/shared/filter/selecting-item/selecting-degree";
import SelectingCategory from "@/components/shared/filter/selecting-item/selecting-category";
import SelectingLanguage from "@/components/shared/filter/selecting-item/selecting-language";

const Filter = () => {
    return (
        <div className={'bg-(--dark) w-83.5 h-122.5 p-6 rounded-lg border border-(--stroke)'}>
            <div className={'flex justify-between mb-5'}>
                <h2 className={'text-lg'}>Filter</h2>
                <h2 className={'text-lg text-(--blue)'}>Reset</h2>
            </div>
            <div className={'flex flex-col gap-6 pt-2'}>
            <SelectingDegree/>
            <SelectingCategory/>
            <SelectingLanguage/>
            </div>
        </div>
    )
};

export default Filter;