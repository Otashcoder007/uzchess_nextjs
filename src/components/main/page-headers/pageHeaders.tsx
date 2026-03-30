import Courses from "@/components/main/page-headers/courses";
import Library from "@/components/main/page-headers/library";

const PageHeaders = () => {
    return (
        <div className={'flex justify-center gap-10'}>
            <Courses/>
            <Library/>
        </div>
    )
};

export default PageHeaders;