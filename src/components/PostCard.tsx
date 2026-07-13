import type { FC } from 'react';

interface PostCardProps {
  title: string;
  slug: string;
  description?: string;
  date: Date;
  tags?: string[];
  readingTime?: number;
}

const PostCard: FC<PostCardProps> = ({ title, slug, description, date, tags, readingTime }) => {
  const formattedDate = new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="card">
      <div className="flex items-center flex-wrap gap-1 mb-2 text-xs text-gray-500">
        <time dateTime={new Date(date).toISOString()}>
          {formattedDate}
        </time>
        {readingTime !== undefined && (
          <span> · 阅读约 {readingTime} 分钟</span>
        )}
      </div>
      <h2 className="mb-1.5">
        <a href={`/posts/${slug}/`} className="text-xl font-bold text-gray-900 hover:text-brand-600 transition-colors">
          {title}
        </a>
      </h2>
      {description && (
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{description}</p>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      )}
      <a href={`/posts/${slug}/`} className="text-sm font-semibold text-brand-600 hover:gap-2 inline-flex items-center gap-1 transition-all">
        阅读全文 →
      </a>
    </article>
  );
};

export default PostCard;
