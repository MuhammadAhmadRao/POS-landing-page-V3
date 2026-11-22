import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Real Customer Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Trusted by modern leaders <br />
            <span className="text-blue-600">across 3 major industries.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From premier retail outlets managing multi-branch stocks to busy weekend salons and fast-turnover bistros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx}
              className="bg-slate-50/80 rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-white border border-slate-200 rounded-lg text-slate-700">
                    {t.category}
                  </span>
                  
                  {/* 5 Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-3" />

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <img 
                  src={t.image} 
                  alt={t.author} 
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.author}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <div className="text-xs text-slate-500">{t.title}</div>
                  <div className="text-xs font-semibold text-blue-600">{t.company}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

