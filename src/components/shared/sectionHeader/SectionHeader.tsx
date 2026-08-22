import { Sparkles } from "lucide-react";

const SectionHeader = ({ title, subtitle, toolText }: { title: string, subtitle: string, toolText?: string }) => {
  return (
    <div className="text-center mt-10 md:mt-0 mb-12 md:mb-24">
      {
        toolText && <div className="inline-flex items-center rounded-full border border-[#DB2777]/20 bg-[#39B5AE]/10 px-3 my-2 py-1 text-sm text-[#39B5AE] shadow-sm">
          <Sparkles className="mr-2 h-4 w-4" />
          {toolText}
        </div>
      }

      <h2 className="text-2xl md:text-4xl font-bold  mb-4 font-serif  bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-500 text-transparent bg-clip-text">{title}</h2>
      <p className="text-black text-sm md:text-base max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;