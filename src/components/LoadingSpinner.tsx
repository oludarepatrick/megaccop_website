import { Skeleton } from "./ui/skeleton"

const LoadingSpinner =() => {
    return (
        <section className="container mx-auto px-8 relative -top-30">
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[450px] w-full rounded-xl " />
                <div className="space-y-2">
                    <Skeleton className="h-4" />
                    <Skeleton className="h-4" />
                </div>
            </div>
        </section>
    )
}
export default LoadingSpinner;