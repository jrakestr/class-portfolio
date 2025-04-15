interface RoleProps {
  role: {
    company: string;
    title: string;
    logo: string;
    start: string | { label: string; dateTime: string };
    end: string | { label: string; dateTime: string };
  };
}

export function Role({ role }: RoleProps) {
  // Extract start and end dates from the role object
  const startLabel = typeof role.start === 'string' ? role.start : role.start.label;
  const startDate = typeof role.start === 'string' ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === 'string' ? role.end : role.end.label;
  const endDate = typeof role.end === 'string' ? role.end : role.end.dateTime;

  // Render a role with company logo, company name, role title, and date range
  return (
    <li className="flex gap-4 mb-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 bg-slate-800 border border-slate-700">
        <img src={role.logo} alt={`${role.company} logo`} className="h-7 w-7" />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-white">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-gray-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-gray-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate.toString()}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate.toString()}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}
