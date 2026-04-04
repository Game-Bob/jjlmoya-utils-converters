import os
import re

class FileDiscovery:
    def __init__(self, root_path, extension):
        self.root_path = root_path
        self.extension = extension

    def get_files(self):
        matched_files = []
        for root, _, files in os.walk(self.root_path):
            for file in files:
                if file.endswith(self.extension):
                    matched_files.append(os.path.join(root, file))
        return matched_files

class ContentProcessor:
    def __init__(self, separators):
        self.separators = separators
        self.target_keys = ["title", "text", "name", "faqTitle", "bibliographyTitle"]

    def _clean_text(self, text):
        cleaned = text
        for sep in self.separators:
            if sep in cleaned:
                cleaned = cleaned.split(sep)[0].strip()
        return cleaned

    def _replace_callback(self, match):
        key = match.group(1)
        quote = match.group(2)
        text = match.group(3)
        
        cleaned_text = self._clean_text(text)
        return f"{key}: {quote}{cleaned_text}{quote}"

    def _replace_const_callback(self, match):
        prefix = match.group(1)
        quote = match.group(2)
        text = match.group(3)
        
        cleaned_text = self._clean_text(text)
        return f"{prefix}{quote}{cleaned_text}{quote}"

    def _replace_seo_callback(self, match):
        prefix = match.group(1)
        quote = match.group(2)
        text = match.group(3)
        
        cleaned_text = self._clean_text(text)
        return f"{prefix}{quote}{cleaned_text}{quote}"

    def process(self, content):
        title_keys = ["title", "faqTitle", "bibliographyTitle"]
        keys_pattern = "|".join(title_keys)
        
        pattern = rf"(?<!slug)(?<!\w)({keys_pattern})\s*:\s*(['\"`])(.*?)\2"
        content = re.sub(pattern, self._replace_callback, content)
        
        const_pattern = r"(const\s+title\s*=\s*)(['\"`])(.*?)\2"
        content = re.sub(const_pattern, self._replace_const_callback, content)
        
        seo_pattern = r"(type:\s*['\"]title['\"]\s*,\s*text:\s*)(['\"`])(.*?)\2"
        content = re.sub(seo_pattern, self._replace_seo_callback, content)
        
        return content

class FileStorage:
    @staticmethod
    def read(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()

    @staticmethod
    def write(file_path, content):
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)

class TitleCleaner:
    def __init__(self):
        self.discovery = FileDiscovery("src/tool", ".ts")
        self.processor = ContentProcessor(["|", "-"])
        self.storage = FileStorage()

    def run(self):
        files = self.discovery.get_files()
        for file_path in files:
            content = self.storage.read(file_path)
            new_content = self.processor.process(content)
            if content != new_content:
                self.storage.write(file_path, new_content)

if __name__ == "__main__":
    cleaner = TitleCleaner()
    cleaner.run()
