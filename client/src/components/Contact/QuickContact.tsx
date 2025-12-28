import { QUICK_CONTACT } from "@/constants/contact";

export default function QuickContact() {
  return (
    <div className="mt-8 space-y-4 px-2">
        {QUICK_CONTACT.map((contact) => (
      <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/50">
        <div className="bg-secondary p-2 rounded-full text-primary">
          <contact.icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground uppercase font-bold">
            {contact.title}
          </p>
          <p className="font-semibold text-foreground">{contact.description}</p>
        </div>
      </div>
      ))}
    </div>
  );
}
