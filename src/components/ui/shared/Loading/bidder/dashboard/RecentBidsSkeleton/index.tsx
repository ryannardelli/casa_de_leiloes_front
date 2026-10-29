export function RecentBidsSkeleton() {
    return (
        <>
            {Array.from({ length: 4 }).map((_, index) => (
                <tr key={index}>
                    {Array.from({ length: 6 }).map((_, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4">
                            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
}