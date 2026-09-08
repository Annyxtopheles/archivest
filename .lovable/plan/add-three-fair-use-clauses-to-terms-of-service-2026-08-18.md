# Add three fair-use clauses to Terms of Service

Insert three new paragraphs into Section 5 (Acceptable Use and Fair Use) on the Terms of Service page, placed directly after the "Users may not:" bullet list and before the closing paragraph that starts "StoryGroove reserves the right to monitor usage patterns…".

## Order and content

1. **Individual and Commercial Use** — individual accounts may not process client, third-party, or publishing-house manuscripts; editors, editorial firms, and publishers must contact StoryGroove for authorization and commercial pricing.
2. **Benchmarking and competitive testing** — no testing, benchmarking, comparing, or evaluating StoryGroove or its AI coaches to develop or improve another product, platform, model, or commercial workflow.
3. **Fair Use Is Not Defined Solely by Numerical Limits** — absence of a counter, daily cap, or numeric limit is not permission for unlimited use; fair use may be judged by volume, frequency, pattern, purpose, and manner of use.

Headings stay exactly as written (including the lowercase wording of the second one), rendered as bold lead-ins inside each paragraph.

## Technical notes

- File: `src/pages/TermsOfService.tsx`, Section 5 block.
- Three `<p className="text-gray-700 leading-relaxed mb-4">` elements with a `<strong>` heading lead-in, matching existing paragraph styling.
- No layout, spacing, or other section changes.
