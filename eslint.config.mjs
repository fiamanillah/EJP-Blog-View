import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname, // Required for resolving configurations
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals'), // Resolves Next.js-specific linting rules
    {
        rules: {
            // Add custom rules here if needed
        },
    },
];

export default eslintConfig;
