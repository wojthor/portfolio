"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { BarChart3, ChevronDown, Globe } from "lucide-react";
import type { OfferCustomIdea, OfferFeature, OfferTab, OfferTier } from "@/i18n/translations";
import { AccentChip, SectionBadge } from "@/app/components/brand-badge";
import { useLanguage } from "@/i18n/LanguageProvider";

const MAILTO_BASE = "mailto:wojtek1aniszewski1@gmail.com";
const DRAWER_TRANSITION_MS = 500;

function tierMailto(subjectPrefix: string, tierName: string) {
  const subject = encodeURIComponent(`${subjectPrefix} ${tierName}`);
  return `${MAILTO_BASE}?subject=${subject}`;
}

function parsePrice(price: string) {
  const match = price.match(/^(od|from)\s+(.+)$/i);
  if (match) return { prefix: match[1], amount: match[2] };
  return { prefix: "", amount: price };
}

function splitExamples(examples: string) {
  return examples.split(/,\s*/).map((s) => s.trim()).filter(Boolean);
}

function navButtonClass(isActive: boolean) {
  return `border-l-[3px] py-1.5 pl-4 pr-2 text-left text-sm transition-colors duration-300 ${
    isActive
      ? "border-[#F7011E] font-medium text-[#F7011E]"
      : "border-transparent text-white/90 hover:text-white"
  }`;
}

function EditorialLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
      {children}
    </p>
  );
}

function OfferHeader({
  eyebrow,
  name,
  description,
  price,
}: {
  eyebrow: string;
  name: string;
  description: string;
  price: string;
}) {
  const { prefix, amount } = parsePrice(price);

  return (
    <div className="flex flex-col gap-4 border-b border-white/10 pb-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#F7011E]">
          {eyebrow}
        </p>
        <h2 className="mt-1.5 text-[24px] font-bold leading-tight tracking-tight text-white lg:text-[28px]">
          {name}
        </h2>
        <p className="mt-1.5 max-w-md text-sm leading-snug text-gray-500">{description}</p>
      </div>
      <div className="shrink-0 lg:text-right">
        <p className="leading-none">
          {prefix && (
            <span className="mr-1.5 text-sm font-medium uppercase tracking-wider text-gray-400">
              {prefix}
            </span>
          )}
          <span className="text-[26px] font-bold tracking-tight text-[#F7011E] lg:text-[30px]">
            {amount}
          </span>
        </p>
      </div>
    </div>
  );
}

function BenefitGrid({ label, features }: { label: string; features: OfferFeature[] }) {
  return (
    <div>
      <EditorialLabel>{label}</EditorialLabel>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-3"
          >
            <span className="text-[11px] font-medium tabular-nums text-[#F7011E]">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <p className="mt-1 text-sm font-medium leading-snug text-white">{feature.title}</p>
            <p className="mt-0.5 text-xs leading-snug text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamplesList({ items }: { items: string[] }) {
  return (
    <div>
      {items.map((item, idx) => (
        <div key={item}>
          <p className="py-2 text-sm leading-snug text-gray-300">{item}</p>
          {idx < items.length - 1 && <div className="border-b border-white/10" />}
        </div>
      ))}
    </div>
  );
}

function TechRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <EditorialLabel>{label}</EditorialLabel>
      <div className="-mt-1 flex flex-wrap gap-2">
        {items.map((item) => (
          <AccentChip key={item}>{item}</AccentChip>
        ))}
      </div>
    </div>
  );
}

function FooterCtaLink({ href, button }: { href: string; button: string }) {
  const label = button.replace(/\s*→\s*$/, "");

  return (
    <a href={href} className="group inline-flex shrink-0 flex-col items-end">
      <span className="text-sm font-medium text-white">
        {label}{" "}
        <span className="text-[#F7011E] transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </span>
      <span className="mt-1.5 h-px w-[calc(100%+12px)] bg-[#F7011E]/50 transition-colors duration-300 group-hover:bg-[#F7011E]" />
    </a>
  );
}

function OfferPanelFooter({
  question,
  subtitle,
  button,
  href,
}: {
  question: string;
  subtitle: string;
  button: string;
  href: string;
}) {
  return (
    <div className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-white">{question}</p>
        <p className="mt-0.5 text-xs text-gray-500">{subtitle}</p>
      </div>
      <FooterCtaLink href={href} button={button} />
    </div>
  );
}

function GatewayCard({
  icon,
  title,
  viewOffer,
  flexClass,
  isActive,
  isExpanded,
  onHover,
  onClick,
}: {
  icon: ReactNode;
  title: string;
  viewOffer: string;
  flexClass: string;
  isActive: boolean;
  isExpanded: boolean;
  onHover: () => void;
  onClick: () => void;
}) {
  return (
    <div
      className={`relative min-h-[148px] transition-all duration-500 ease-out md:min-h-[240px] ${flexClass}`}
      onMouseEnter={onHover}
    >
      <button
        type="button"
        onClick={onClick}
        className={`group absolute inset-0 flex cursor-pointer items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-500 md:-skew-x-[15deg] md:rounded-none ${
          isActive
            ? "border-[#F7011E]/40 bg-white/10 shadow-[0_0_30px_-10px_rgba(247,1,30,0.3)]"
            : "border-white/10 bg-white/5 hover:border-[#F7011E]/40 hover:bg-white/10 hover:shadow-[0_0_40px_-10px_rgba(247,1,30,0.35)]"
        }`}
      >
        <div className="flex flex-col items-center px-5 py-6 text-center md:skew-x-[15deg] md:px-8 md:py-8">
          <span
            className={`mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#F7011E] transition-transform duration-500 md:mb-4 md:h-12 md:w-12 ${
              isActive ? "scale-110" : "group-hover:scale-110"
            }`}
          >
            {icon}
          </span>
          <h3
            className={`text-xl font-bold transition-colors md:text-2xl lg:text-3xl ${
              isActive ? "text-[#F7011E]" : "text-white group-hover:text-[#F7011E]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 flex items-center justify-center gap-1.5 text-sm transition-colors md:mt-3 ${
              isActive ? "text-[#F7011E]" : "text-gray-400 group-hover:text-[#F7011E]"
            }`}
          >
            {viewOffer}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </p>
        </div>
      </button>
    </div>
  );
}

function OfferMasterDetail({
  tab,
  tiers,
  selectedIndex,
  activeIndex,
  isContentVisible,
  onSelectIndex,
  servicesNavTitle,
  scopeLabel,
  techDetailsLabel,
  mailtoSubject,
  footerCta,
  customIdea,
}: {
  tab: OfferTab;
  tiers: OfferTier[];
  selectedIndex: number;
  activeIndex: number;
  isContentVisible: boolean;
  onSelectIndex: (index: number) => void;
  servicesNavTitle: string;
  scopeLabel: string;
  techDetailsLabel: string;
  mailtoSubject: string;
  footerCta: { question: string; subtitle: string; button: string };
  customIdea: OfferCustomIdea;
}) {
  const customIdeaIndex = tiers.length;
  const isCustomIdea = selectedIndex === customIdeaIndex;
  const selected = isCustomIdea ? null : tiers[selectedIndex];

  if (!isCustomIdea && !selected) return null;

  const mailtoTopic = isCustomIdea
    ? `${customIdea.navLabel} (${tab === "web" ? "Web" : "Data"})`
    : selected!.name;
  const mailtoHref = tierMailto(mailtoSubject, mailtoTopic);

  return (
    <div className="mx-auto my-3 flex w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] lg:flex-row">
      <div className="w-full shrink-0 border-b border-white/10 lg:w-[26%] lg:border-b-0 lg:border-r">
        <div className="px-5 py-4">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500">
            {servicesNavTitle}
          </p>
          <nav className="flex flex-col gap-1">
            {tiers.map((tier, idx) => (
              <button
                key={tier.name}
                type="button"
                onClick={() => onSelectIndex(idx)}
                className={navButtonClass(activeIndex === idx)}
              >
                {tier.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => onSelectIndex(customIdeaIndex)}
              className={navButtonClass(activeIndex === customIdeaIndex)}
            >
              {customIdea.navLabel}
            </button>
          </nav>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 py-4 lg:px-7 lg:py-5">
        <div
          key={`${tab}-${selectedIndex}`}
          className={`animate-in fade-in slide-in-from-right-4 flex flex-1 flex-col transition-all duration-300 ${
            isContentVisible ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
          }`}
        >
          {isCustomIdea ? (
            <>
              <div className="border-b border-white/10 pb-5">
                <h2 className="text-[24px] font-bold tracking-tight text-white lg:text-[28px]">
                  {customIdea.navLabel}
                </h2>
                <p className="mt-1.5 max-w-md text-sm leading-snug text-gray-500">
                  {customIdea.desc}
                </p>
              </div>
              <OfferPanelFooter
                question={footerCta.question}
                subtitle={footerCta.subtitle}
                button={`${customIdea.cta} →`}
                href={mailtoHref}
              />
            </>
          ) : (
            selected && (
              <>
                <OfferHeader
                  eyebrow={selected.name.toUpperCase()}
                  name={selected.name}
                  description={selected.description}
                  price={selected.price}
                />

                <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="min-w-0 flex-1">
                    <BenefitGrid label={scopeLabel} features={selected.features} />
                  </div>
                  <div className="lg:w-[240px] lg:shrink-0">
                    <EditorialLabel>{selected.examplesLabel}</EditorialLabel>
                    <ExamplesList items={splitExamples(selected.examples)} />
                  </div>
                </div>

                <TechRow label={techDetailsLabel} items={selected.tech} />

                <OfferPanelFooter
                  question={footerCta.question}
                  subtitle={footerCta.subtitle}
                  button={footerCta.button}
                  href={mailtoHref}
                />
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function getFlexClass(index: 0 | 1, hovered: 0 | 1 | null) {
  if (hovered === null) return "md:flex-1";
  if (hovered === index) return "md:flex-[1.12] z-10";
  return "md:flex-[0.88] opacity-90";
}

export default function OfferSection() {
  const { t } = useLanguage();
  const { offer } = t;
  const [selectedTab, setSelectedTab] = useState<OfferTab | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [displayedServiceIndex, setDisplayedServiceIndex] = useState(0);
  const [isServiceContentVisible, setIsServiceContentVisible] = useState(true);
  const [hovered, setHovered] = useState<0 | 1 | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const serviceTransitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTransitionTimeout = () => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }
  };

  const clearServiceTransitionTimeout = () => {
    if (serviceTransitionTimeoutRef.current) {
      clearTimeout(serviceTransitionTimeoutRef.current);
      serviceTransitionTimeoutRef.current = null;
    }
  };

  useEffect(
    () => () => {
      clearTransitionTimeout();
      clearServiceTransitionTimeout();
    },
    [],
  );

  useEffect(() => {
    setSelectedServiceIndex(0);
    setDisplayedServiceIndex(0);
    setIsServiceContentVisible(true);
    clearServiceTransitionTimeout();
  }, [selectedTab]);

  const handleSelectServiceIndex = (index: number) => {
    if (index === selectedServiceIndex) return;

    setSelectedServiceIndex(index);
    setIsServiceContentVisible(false);
    clearServiceTransitionTimeout();

    serviceTransitionTimeoutRef.current = setTimeout(() => {
      setDisplayedServiceIndex(index);
      requestAnimationFrame(() => setIsServiceContentVisible(true));
      serviceTransitionTimeoutRef.current = null;
    }, 150);
  };

  const openDrawer = (tab: OfferTab) => {
    setSelectedTab(tab);
    requestAnimationFrame(() => setIsDrawerOpen(true));
  };

  const handleTabToggle = (tab: OfferTab) => {
    clearTransitionTimeout();

    if (selectedTab === tab && isDrawerOpen) {
      setIsDrawerOpen(false);
      transitionTimeoutRef.current = setTimeout(() => {
        setSelectedTab(null);
        transitionTimeoutRef.current = null;
      }, DRAWER_TRANSITION_MS);
      return;
    }

    if (selectedTab === null) {
      openDrawer(tab);
      return;
    }

    if (selectedTab === tab && !isDrawerOpen) {
      setIsDrawerOpen(true);
      return;
    }

    setIsDrawerOpen(false);
    transitionTimeoutRef.current = setTimeout(() => {
      openDrawer(tab);
      transitionTimeoutRef.current = null;
    }, DRAWER_TRANSITION_MS);
  };

  const currentData =
    selectedTab === "data" ? offer.data : selectedTab === "web" ? offer.web : [];

  const servicesNavTitle =
    selectedTab === "data" ? offer.servicesNav.data : offer.servicesNav.web;

  return (
    <section id="offer" className="relative z-10 border-t border-white/10 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <header className="mb-10 text-center md:mb-12">
          <SectionBadge className="mb-4">{offer.sectionBadge}</SectionBadge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {offer.sectionTitle}
          </h2>
        </header>

        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:gap-2"
          onMouseLeave={() => setHovered(null)}
        >
          <GatewayCard
            icon={<Globe className="h-7 w-7" />}
            title={offer.gateways.web}
            viewOffer={offer.viewOffer}
            flexClass={getFlexClass(0, hovered)}
            isActive={selectedTab === "web"}
            isExpanded={selectedTab === "web" && isDrawerOpen}
            onHover={() => setHovered(0)}
            onClick={() => handleTabToggle("web")}
          />
          <GatewayCard
            icon={<BarChart3 className="h-7 w-7" />}
            title={offer.gateways.data}
            viewOffer={offer.viewOffer}
            flexClass={getFlexClass(1, hovered)}
            isActive={selectedTab === "data"}
            isExpanded={selectedTab === "data" && isDrawerOpen}
            onHover={() => setHovered(1)}
            onClick={() => handleTabToggle("data")}
          />
        </div>

        <div
          className={`mx-auto grid w-full max-w-6xl transition-all duration-500 ease-in-out ${
            isDrawerOpen
              ? "mt-6 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {selectedTab && (
              <OfferMasterDetail
                tab={selectedTab}
                tiers={currentData}
                selectedIndex={displayedServiceIndex}
                activeIndex={selectedServiceIndex}
                isContentVisible={isServiceContentVisible}
                onSelectIndex={handleSelectServiceIndex}
                servicesNavTitle={servicesNavTitle}
                scopeLabel={offer.scopeLabel}
                techDetailsLabel={offer.techDetailsLabel}
                mailtoSubject={offer.mailtoSubject}
                footerCta={offer.footerCta}
                customIdea={offer.customIdea}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
