'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  initialProductSlug?: string;
}

export default function QuoteForm({ initialProductSlug }: QuoteFormProps) {
  // Find initial product name or fallback
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
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid contact phone number';
    }
    if (!formData.product) {
      newErrors.product = 'Please select a product category';
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
      <div className="bg-ivory border border-warm-gray p-8 rounded-lg text-left animate-in fade-in duration-300">
        <div className="flex items-center space-x-3 text-navy mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
          <h3 className="text-xl font-bold">Inquiry Simulated Successfully</h3>
        </div>
        <div className="space-y-4 text-sm text-steel leading-relaxed">
          <p>
            Thank you, <strong className="text-navy">{formData.name}</strong> from{' '}
            <strong className="text-navy">{formData.company}</strong>. Your quotation request for{' '}
            <strong className="text-navy">{formData.product}</strong> has been received by this interactive demo.
          </p>
          <div className="p-4 bg-white border border-warm-gray rounded-md text-xs text-steel">
            <p className="font-semibold text-navy mb-1">Demonstration Notice:</p>
            This website currently functions in demonstration mode. No live email or CRM transmission has occurred. For active commercial inquiries, please contact{' '}
            <a href="mailto:sales@vihanitransoceanic.com" className="font-semibold text-navy underline underline-offset-2">
              sales@vihanitransoceanic.com
            </a>{' '}
            or{' '}
            <a href="mailto:dhaval@vihanitransoceanic.com" className="font-semibold text-navy underline underline-offset-2">
              dhaval@vihanitransoceanic.com
            </a>.
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="mt-4 px-6 py-2.5 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 bg-white p-8 border border-warm-gray rounded-lg shadow-sm">
      <div className="border-b border-warm-gray/60 pb-4">
        <h3 className="text-xl font-bold text-navy">Request a Commercial Quote</h3>
        <p className="text-sm text-steel mt-1">
          Specify your packaging dimensions, quantities, or technical requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            Full Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
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
            Company Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="company"
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
            Business Email <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.email}
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
            Phone / WhatsApp <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+91..."
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Product Select */}
        <div>
          <label htmlFor="product" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
            Product Category <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <select
            id="product"
            value={formData.product}
            onChange={(e) => setFormData({ ...formData, product: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
            aria-required="true"
            aria-invalid={!!errors.product}
          >
            <option value="">Select a category</option>
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
            Estimated Quantity
          </label>
          <input
            type="text"
            id="quantity"
            placeholder="e.g. 5,000 units / 1 FCL"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
          />
        </div>
      </div>

      {/* Destination */}
      <div>
        <label htmlFor="destination" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          Destination Port / Delivery Location
        </label>
        <input
          type="text"
          id="destination"
          placeholder="e.g. Mundra, Nhava Sheva, or City, Country"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
        />
      </div>

      {/* Specifications */}
      <div>
        <label htmlFor="specifications" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          Technical Specifications / Fabric GSM / Dimensions
        </label>
        <textarea
          id="specifications"
          rows={3}
          placeholder="Specify GSM, loops, liner requirements, printing layers, etc."
          value={formData.specifications}
          onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
          className="w-full px-4 py-2.5 text-sm rounded-md border border-warm-gray bg-white text-foreground focus:outline-2 focus:outline-navy"
        />
      </div>

      {/* Additional Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy mb-1.5">
          Additional Remarks
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
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-md bg-navy text-white text-base font-medium hover:bg-navy-light transition-colors disabled:opacity-50 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-navy"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing Request...
            </>
          ) : (
            'Submit Quotation Request'
          )}
        </button>
      </div>
    </form>
  );
}
