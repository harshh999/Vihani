'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useI18n } from '@/i18n/provider';

interface QuoteFormProps {
  initialProductSlug?: string;
}

export default function QuoteForm({ initialProductSlug }: QuoteFormProps) {
  const { t } = useI18n();

  // Find initial product name or fallback (product names remain unchanged)
  const preselected = products.find((p) => p.slug === initialProductSlug)?.name || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: preselected,
    quantity: '',
    specifications: '',
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t.contact.errorName;
    if (!formData.company.trim()) newErrors.company = t.contact.errorCompany;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.errorEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = t.contact.errorEmailInvalid;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.errorPhoneRequired;
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = t.contact.errorPhoneInvalid;
    }
    if (!formData.product) {
      newErrors.product = t.contact.errorProduct;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API request processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      product: '',
      quantity: '',
      specifications: '',
      destination: '',
      message: '',
    });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className="bg-ivory border border-warm-gray p-8 rounded-lg text-left rtl:text-right animate-in fade-in duration-300">
        <div className="flex items-center space-x-3 rtl:space-x-reverse text-navy mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
          <h3 className="text-xl font-bold">{t.contact.successTitle}</h3>
        </div>
        <div className="space-y-4 text-sm text-steel leading-relaxed">
          <p>
            {t.contact.successMessagePart1}
            <strong className="text-navy">{formData.name}</strong>
            {t.contact.successMessagePart2}
            <strong className="text-navy">{formData.company}</strong>
            {t.contact.successMessagePart3}
            <strong className="text-navy">{formData.product}</strong>
            {t.contact.successMessagePart4}
          </p>
          <div className="p-4 bg-white border border-warm-gray rounded-md text-xs text-steel">
            <p className="font-semibold text-navy mb-1">{t.contact.demoNoticeTitle}</p>
            {t.contact.demoNoticeBody}
            <a href="mailto:sales@vihanitransoceanic.com" className="font-semibold text-navy underline underline-offset-2" dir="ltr">
              sales@vihanitransoceanic.com
            </a>
            {t.contact.demoNoticeOr}
            <a href="mailto:dhaval@vihanitransoceanic.com" className="font-semibold text-navy underline underline-offset-2" dir="ltr">
              dhaval@vihanitransoceanic.com
            </a>.
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors cursor-pointer"
          >
            {t.contact.submitAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-white p-8 border border-warm-gray rounded-lg shadow-xs">
      <div className="border-b border-warm-gray/60 pb-4">
        <h3 className="text-xl font-bold text-navy">{t.contact.formHeading}</h3>
        <p className="text-sm text-steel mt-1">
          {t.contact.formSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.fullNameLabel} <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder={t.contact.fullNamePlaceholder}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.companyNameLabel} <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="company"
            placeholder={t.contact.companyNamePlaceholder}
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.company}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.emailInputLabel} <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder={t.contact.emailInputPlaceholder}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.email}
            dir="ltr"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.phoneInputLabel} <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder={t.contact.phoneInputPlaceholder}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.phone}
            dir="ltr"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Product Select (Product names are protected and unchanged) */}
        <div>
          <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.productCategoryLabel} <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <select
            id="product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.product}
          >
            <option value="">{t.contact.selectCategory}</option>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.product}
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="quantity" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            {t.contact.quantityLabel}
          </label>
          <input
            type="text"
            id="quantity"
            placeholder={t.contact.quantityPlaceholder}
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
          />
        </div>
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          {t.contact.destinationLabel}
        </label>
        <input
          type="text"
          id="destination"
          placeholder={t.contact.destinationPlaceholder}
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
        />
      </div>

      {/* Specifications */}
      <div>
        <label htmlFor="specifications" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          {t.contact.specificationsLabel}
        </label>
        <textarea
          id="specifications"
          rows={3}
          placeholder={t.contact.specificationsPlaceholder}
          value={formData.specifications}
          onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
        />
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          {t.contact.remarksLabel}
        </label>
        <textarea
          id="message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md bg-navy text-white text-base font-medium hover:bg-navy-light transition-colors disabled:opacity-50 cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-navy"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2 animate-spin" />
              {t.contact.submittingButton}
            </>
          ) : (
            t.contact.submitButton
          )}
        </button>
      </div>
    </form>
  );
}
