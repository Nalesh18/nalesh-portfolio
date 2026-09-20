import { ArrowDown } from "lucide-react";
import type { ArchitectureNode } from "../../data/projects";

/**
 * Conceptual data-flow diagram rendered as an ordered list — it stays legible
 * at every width and reads correctly to a screen reader.
 */
export function FlowDiagram({
  nodes,
  label,
}: {
  nodes: ArchitectureNode[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="space-y-0">
      {nodes.map((node, index) => (
        <li key={node.label}>
          <div className="rounded-md border border-line bg-bg-elevated px-4 py-3">
            <p className="font-mono text-[13px] text-text">{node.label}</p>
            {node.note && (
              <p className="mt-1 text-[12.5px] leading-snug text-text-dim">
                {node.note}
              </p>
            )}
          </div>
          {index < nodes.length - 1 && (
            <div className="flex justify-center py-1.5" aria-hidden="true">
              <ArrowDown className="size-3.5 text-text-dim" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
