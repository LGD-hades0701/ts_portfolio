import Link from 'next/link';

import { SidebarContent } from '..';

declare namespace Keywords {
    type Props = {
        keywords: Keyword[];
    };

    type Keyword = {
        keyword: string;
        count: number | null;
    };
}

const Keywords: React.FC<Keywords.Props> = ({ keywords }) => {
    return (
        <SidebarContent title="Keywords">
            <ul className="space-y-1 list-disc list-inside pl-2">
                {keywords.map(({ count, keyword }) => (
                    <li key={keyword}>
                        <Link href={`/keywords/${keyword}`}>
                            <a className="hover:text-sky-700 dark:hover:text-amber-500">{keyword}</a>
                        </Link>
                        {count !== null && ` (${count})`}
                    </li>
                ))}
            </ul>
        </SidebarContent>
    );
};

export { Keywords };
