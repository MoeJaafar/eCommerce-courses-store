import { ActiveLink } from "../../common";

interface BreadcrumbItem {
  href: string;
  value: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-black divide-x divide-black">
        {items.map((item, i) => (
          <li
            key={item.href}
            className={`${
              i == 0 ? "pr-4" : "px-4"
            } font-medium text-gray-500 hover:text-gray-900`}
          >
            <ActiveLink href={item.href}>
              <span>{item.value}</span>
            </ActiveLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}
// tested
