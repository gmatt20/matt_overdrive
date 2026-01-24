export default function Footer() {
  return (
    <footer className="border-t border-border mt-32 pt-10 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="font-mono text-sm text-primary font-bold">
            Matthew Garcia
          </div>
          <p className="text-sm text-muted-foreground">
            "Success is not final, failure is not fatal."
          </p>
        </div>
      </div>
    </footer>
  );
}
