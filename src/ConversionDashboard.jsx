import React, { useState } from 'react';

const conversions = [
  {
    id: 1,
    email: 'marcus.chen@techventures.io',
    domain: 'aiforge.com',
    amount: 4250,
    status: 'Full Price',
    paymentType: 'Outright',
    installments: null,
    source: 'google',
    medium: 'cpc',
    campaign: 'premium-domains-q4',
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-11-28T09:14:00',
    purchaseDate: '2024-12-08T14:32:00',
    timeOnSite: 847,
    searches: 12,
    keywordsSearched: ['ai domains', 'artificial intelligence brand', 'ai startup name', 'forge ai', 'machine learning domain'],
    domainsClicked: ['aiforge.com', 'neuralpath.io', 'synthwave.ai', 'dataweave.com'],
    domainsShortlisted: ['aiforge.com', 'neuralpath.io'],
    pagesVisited: ['/premium-domains-for-sale', '/domain/aiforge.com', '/domain/neuralpath.io', '/pricing', '/checkout'],
    chatUsed: true,
    adminId: 'usr_8x7k2m9p'
  },
  {
    id: 2,
    email: 'sarah.mitchell@brandcraft.co',
    domain: 'brandcraft.io',
    amount: 1875,
    status: 'Negotiated',
    paymentType: 'Installments',
    installments: 3,
    source: 'organic',
    medium: 'organic',
    campaign: null,
    landingPage: '/',
    firstVisit: '2024-12-01T16:42:00',
    purchaseDate: '2024-12-09T11:15:00',
    timeOnSite: 423,
    searches: 8,
    keywordsSearched: ['brand', 'branding agency domain', 'craft brand', 'creative agency'],
    domainsClicked: ['brandcraft.io', 'craftbrand.com', 'brandhive.co'],
    domainsShortlisted: ['brandcraft.io'],
    pagesVisited: ['/', '/search?q=brand', '/domain/brandcraft.io', '/make-offer', '/checkout'],
    chatUsed: false,
    adminId: 'usr_3n5v8w2q'
  },
  {
    id: 3,
    email: 'james.rodriguez@startuplab.vc',
    domain: 'launchpad.io',
    amount: 8500,
    status: 'Full Price',
    paymentType: 'Installments',
    installments: 6,
    source: 'linkedin',
    medium: 'paid_social',
    campaign: 'vc-founders-nov',
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-11-15T11:22:00',
    purchaseDate: '2024-12-05T09:45:00',
    timeOnSite: 1523,
    searches: 24,
    keywordsSearched: ['venture capital', 'startup accelerator', 'launchpad', 'founder platform', 'vc fund name', 'incubator domain'],
    domainsClicked: ['launchpad.io', 'venturehq.com', 'founderstack.co', 'startupnest.com', 'pitchdeck.io', 'seedfund.co'],
    domainsShortlisted: ['launchpad.io', 'founderstack.co', 'pitchdeck.io'],
    pagesVisited: ['/premium-domains-for-sale', '/search?q=venture', '/domain/launchpad.io', '/domain/founderstack.co', '/compare', '/checkout'],
    chatUsed: true,
    adminId: 'usr_9k4m7x2p'
  },
  {
    id: 4,
    email: 'emma.watson@greenleaf.org',
    domain: 'greenleaf.co',
    amount: 950,
    status: 'Make Offer',
    paymentType: 'Outright',
    installments: null,
    source: 'google',
    medium: 'organic',
    campaign: null,
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-12-07T14:08:00',
    purchaseDate: '2024-12-10T16:20:00',
    timeOnSite: 312,
    searches: 5,
    keywordsSearched: ['eco friendly', 'green business', 'sustainable brand'],
    domainsClicked: ['greenleaf.co', 'ecohub.org', 'sustainify.io'],
    domainsShortlisted: ['greenleaf.co'],
    pagesVisited: ['/premium-domains-for-sale', '/domain/greenleaf.co', '/make-offer', '/checkout'],
    chatUsed: false,
    adminId: 'usr_2w8n5v3q'
  },
  {
    id: 5,
    email: 'david.kim@financeplus.com',
    domain: 'wealthforge.com',
    amount: 12750,
    status: 'PR',
    paymentType: 'Installments',
    installments: 12,
    source: 'bing',
    medium: 'cpc',
    campaign: 'finance-premium-dec',
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-11-20T08:30:00',
    purchaseDate: '2024-12-09T13:55:00',
    timeOnSite: 2145,
    searches: 31,
    keywordsSearched: ['wealth management', 'finance platform', 'investment brand', 'fintech domain', 'capital management', 'wealth advisor'],
    domainsClicked: ['wealthforge.com', 'financeplus.io', 'capitalflow.co', 'investiq.com', 'moneywise.io', 'fundtrack.com', 'assetpro.io'],
    domainsShortlisted: ['wealthforge.com', 'financeplus.io', 'capitalflow.co'],
    pagesVisited: ['/premium-domains-for-sale', '/search?q=wealth', '/domain/wealthforge.com', '/domain/financeplus.io', '/compare', '/pricing', '/checkout'],
    chatUsed: true,
    adminId: 'usr_6p3k9m1x'
  },
  {
    id: 6,
    email: 'lisa.park@creativestudio.design',
    domain: 'pixelcraft.io',
    amount: 2200,
    status: 'Negotiated',
    paymentType: 'Outright',
    installments: null,
    source: 'twitter',
    medium: 'paid_social',
    campaign: 'designer-domains-promo',
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-12-03T19:15:00',
    purchaseDate: '2024-12-08T10:30:00',
    timeOnSite: 678,
    searches: 14,
    keywordsSearched: ['design studio', 'pixel art', 'creative agency', 'designer brand', 'digital art'],
    domainsClicked: ['pixelcraft.io', 'designhive.co', 'creativepulse.com', 'artflow.io'],
    domainsShortlisted: ['pixelcraft.io', 'designhive.co'],
    pagesVisited: ['/premium-domains-for-sale', '/search?q=design', '/domain/pixelcraft.io', '/make-offer', '/negotiate', '/checkout'],
    chatUsed: true,
    adminId: 'usr_4j7w2n8v'
  },
  {
    id: 7,
    email: 'alex.thompson@cloudtech.io',
    domain: 'cloudnest.io',
    amount: 3400,
    status: 'Full Price',
    paymentType: 'Outright',
    installments: null,
    source: 'organic',
    medium: 'organic',
    campaign: null,
    landingPage: '/premium-domains-for-sale',
    firstVisit: '2024-12-06T12:45:00',
    purchaseDate: '2024-12-10T08:12:00',
    timeOnSite: 534,
    searches: 9,
    keywordsSearched: ['cloud hosting', 'cloud platform', 'saas domain', 'tech infrastructure'],
    domainsClicked: ['cloudnest.io', 'serverstack.com', 'deployfast.io'],
    domainsShortlisted: ['cloudnest.io'],
    pagesVisited: ['/premium-domains-for-sale', '/domain/cloudnest.io', '/pricing', '/checkout'],
    chatUsed: false,
    adminId: 'usr_1m5x8k3p'
  }
];

const statusColors = {
  'Full Price': { bg: '#dcfce7', text: '#166534', dot: '#22c55e' },
  'Negotiated': { bg: '#fef3c7', text: '#92400e', dot: '#f59e0b' },
  'Make Offer': { bg: '#dbeafe', text: '#1e40af', dot: '#3b82f6' },
  'PR': { bg: '#f3e8ff', text: '#7c3aed', dot: '#a855f7' }
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

function formatDateTime(dateStr) {
  return new Date(dateStr).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(amount);
}

function StatusBadge({ status }) {
  const colors = statusColors[status] || statusColors['Make Offer'];
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: '20px',
      backgroundColor: colors.bg,
      color: colors.text,
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '0.01em'
    }}>
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: colors.dot
      }} />
      {status}
    </span>
  );
}

function DetailSection({ title, children }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <h4 style={{
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: '#94a3b8',
        marginBottom: '14px',
        fontFamily: "'DM Sans', sans-serif"
      }}>{title}</h4>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        {children}
      </div>
    </div>
  );
}

function DetailRow({ label, value, mono = false }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '16px'
    }}>
      <span style={{
        fontSize: '13px',
        color: '#64748b',
        fontFamily: "'DM Sans', sans-serif"
      }}>{label}</span>
      <span style={{
        fontSize: '13px',
        color: '#1e293b',
        fontWeight: '500',
        textAlign: 'right',
        fontFamily: mono ? "'JetBrains Mono', monospace" : "'DM Sans', sans-serif",
        maxWidth: '200px',
        wordBreak: 'break-word'
      }}>{value}</span>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      justifyContent: 'flex-end',
      maxWidth: '220px'
    }}>
      {items.map((item, i) => (
        <span key={i} style={{
          padding: '3px 8px',
          backgroundColor: '#f1f5f9',
          borderRadius: '4px',
          fontSize: '11px',
          fontFamily: "'JetBrains Mono', monospace",
          color: '#475569'
        }}>{item}</span>
      ))}
    </div>
  );
}

function SlidePanel({ conversion, onClose }) {
  if (!conversion) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(2px)',
          zIndex: 40,
          animation: 'fadeIn 0.2s ease-out'
        }}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '420px',
        backgroundColor: '#fff',
        boxShadow: '-8px 0 30px rgba(0,0,0,0.12)',
        zIndex: 50,
        overflowY: 'auto',
        animation: 'slideIn 0.25s ease-out'
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#fff',
          borderBottom: '1px solid #e2e8f0',
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 10
        }}>
          <div>
            <div style={{
              fontSize: '11px',
              color: '#94a3b8',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '4px',
              fontFamily: "'DM Sans', sans-serif"
            }}>Conversion Details</div>
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              fontFamily: "'JetBrains Mono', monospace"
            }}>{conversion.domain}</div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#f1f5f9',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              color: '#64748b',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#e2e8f0'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#f1f5f9'}
          >×</button>
        </div>

        <div style={{ padding: '24px' }}>
          <DetailSection title="Customer">
            <DetailRow label="Email" value={conversion.email} mono />
            <DetailRow label="First Visit" value={formatDateTime(conversion.firstVisit)} />
            <div style={{ marginTop: '4px' }}>
              <button style={{
                width: '100%',
                padding: '10px 16px',
                backgroundColor: '#0f172a',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.15s ease'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#1e293b'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = '#0f172a'}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Open in Admin Portal
              </button>
            </div>
          </DetailSection>

          <DetailSection title="Conversion">
            <DetailRow label="Domain" value={conversion.domain} mono />
            <DetailRow label="Amount" value={formatCurrency(conversion.amount)} />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '13px',
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif"
              }}>Status</span>
              <StatusBadge status={conversion.status} />
            </div>
            <DetailRow
              label="Payment Type"
              value={conversion.paymentType === 'Installments'
                ? `Installments (${conversion.installments})`
                : 'Outright'}
            />
            <DetailRow label="Purchase Date" value={formatDateTime(conversion.purchaseDate)} />
          </DetailSection>

          <DetailSection title="Acquisition">
            <DetailRow label="Source" value={conversion.source} />
            <DetailRow label="Medium" value={conversion.medium} />
            <DetailRow label="Campaign" value={conversion.campaign || '—'} />
            <DetailRow label="Landing Page" value={conversion.landingPage} mono />
          </DetailSection>

          <DetailSection title="Engagement">
            <DetailRow label="Time on Site" value={formatTime(conversion.timeOnSite)} />
            <DetailRow label="Searches" value={conversion.searches} />
            <DetailRow label="Chat Used" value={conversion.chatUsed ? 'Yes' : 'No'} />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <span style={{
                fontSize: '13px',
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif",
                flexShrink: 0
              }}>Keywords Searched</span>
              <TagList items={conversion.keywordsSearched} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <span style={{
                fontSize: '13px',
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif",
                flexShrink: 0
              }}>Domains Clicked</span>
              <TagList items={conversion.domainsClicked} />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <span style={{
                fontSize: '13px',
                color: '#64748b',
                fontFamily: "'DM Sans', sans-serif",
                flexShrink: 0
              }}>Shortlisted</span>
              <TagList items={conversion.domainsShortlisted} />
            </div>
          </DetailSection>

          <DetailSection title="Pages Visited">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              {conversion.pagesVisited.map((page, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    fontWeight: '600',
                    color: '#94a3b8',
                    flexShrink: 0
                  }}>{i + 1}</span>
                  <span style={{
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#475569',
                    wordBreak: 'break-all'
                  }}>{page}</span>
                </div>
              ))}
            </div>
          </DetailSection>
        </div>
      </div>
    </>
  );
}

export default function ConversionDashboard() {
  const [selectedConversion, setSelectedConversion] = useState(null);
  const [dateRange, setDateRange] = useState('last_30_days');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const handleExportCSV = () => {
    const headers = ['Domain', 'Email', 'Amount', 'Status', 'Payment Type', 'Source', 'Medium', 'Campaign', 'Landing Page', 'First Visit', 'Purchase Date', 'Time on Site (s)', 'Searches', 'Chat Used', 'Keywords Searched', 'Domains Clicked', 'Domains Shortlisted'];
    const rows = conversions.map(c => [
      c.domain,
      c.email,
      c.amount,
      c.status,
      c.paymentType === 'Installments' ? `Installments (${c.installments})` : 'Outright',
      c.source,
      c.medium,
      c.campaign || '',
      c.landingPage,
      c.firstVisit,
      c.purchaseDate,
      c.timeOnSite,
      c.searches,
      c.chatUsed ? 'Yes' : 'No',
      c.keywordsSearched.join('; '),
      c.domainsClicked.join('; '),
      c.domainsShortlisted.join('; ')
    ]);

    const csvContent = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '48px 24px'
      }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.2)'
            }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#22c55e',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>Live</span>
          </div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '400',
            color: '#0f172a',
            fontFamily: "'Instrument Serif', serif",
            marginBottom: '6px'
          }}>Conversions</h1>
          <p style={{
            fontSize: '14px',
            color: '#64748b'
          }}>{conversions.length} total conversions</p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '12px',
          marginBottom: '20px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#64748b'
            }}>Date Range</label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              style={{
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                backgroundColor: '#fff',
                fontSize: '13px',
                color: '#1e293b',
                fontFamily: "'DM Sans', sans-serif",
                cursor: 'pointer',
                minWidth: '160px'
              }}
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="last_7_days">Last 7 Days</option>
              <option value="last_30_days">Last 30 Days</option>
              <option value="last_90_days">Last 90 Days</option>
              <option value="custom">Custom Range</option>
            </select>
          </div>

          {dateRange === 'custom' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#64748b'
                }}>Start Date</label>
                <input
                  type="date"
                  value={customStartDate}
                  onChange={(e) => setCustomStartDate(e.target.value)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#fff',
                    fontSize: '13px',
                    color: '#1e293b',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: '#64748b'
                }}>End Date</label>
                <input
                  type="date"
                  value={customEndDate}
                  onChange={(e) => setCustomEndDate(e.target.value)}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#fff',
                    fontSize: '13px',
                    color: '#1e293b',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                />
              </div>
            </>
          )}

          <button
            onClick={() => console.log('Filter applied:', dateRange, customStartDate, customEndDate)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0f172a',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'background-color 0.15s ease'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#1e293b'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#0f172a'}
          >
            Submit
          </button>

          <div style={{ flex: 1 }} />

          <button
            onClick={handleExportCSV}
            style={{
              padding: '10px 16px',
              backgroundColor: '#fff',
              color: '#475569',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.15s ease'
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export to CSV
          </button>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
          overflow: 'hidden',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 100px 100px 120px 100px 44px',
            gap: '16px',
            padding: '14px 20px',
            backgroundColor: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            fontSize: '11px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: '#94a3b8'
          }}>
            <div>Domain</div>
            <div>Customer</div>
            <div>Amount</div>
            <div>Status</div>
            <div>Source</div>
            <div>Date</div>
            <div></div>
          </div>

          {conversions.map((conversion) => (
            <div
              key={conversion.id}
              onClick={() => setSelectedConversion(conversion)}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr 100px 100px 120px 100px 44px',
                gap: '16px',
                padding: '18px 20px',
                borderBottom: '1px solid #f1f5f9',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
                alignItems: 'center'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#fafbfc'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{
                fontSize: '13px',
                fontFamily: "'JetBrains Mono', monospace",
                color: '#0f172a',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>{conversion.domain}</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#64748b',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>{conversion.email}</div>
              <div style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#0f172a',
                fontFamily: "'JetBrains Mono', monospace"
              }}>{formatCurrency(conversion.amount)}</div>
              <div><StatusBadge status={conversion.status} /></div>
              <div style={{
                fontSize: '13px',
                color: '#64748b'
              }}>{conversion.source} / {conversion.medium}</div>
              <div style={{
                fontSize: '13px',
                color: '#64748b'
              }}>{formatDate(conversion.purchaseDate)}</div>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlidePanel
        conversion={selectedConversion}
        onClose={() => setSelectedConversion(null)}
      />
    </div>
  );
}
