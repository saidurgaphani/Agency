import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export function ScheduleCalSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "Design-agency-call" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="relative z-10 pt-0 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 rounded-2xl overflow-hidden bg-card border border-border min-h-[600px]">
          <Cal
            namespace="Design-agency-call"
            calLink="sai-durga-phani/15min" 
            style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </section>
  );
}
