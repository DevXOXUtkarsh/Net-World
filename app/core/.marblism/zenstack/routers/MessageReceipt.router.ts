/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.MessageReceiptInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.MessageReceiptInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.MessageReceiptInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.MessageReceiptInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.MessageReceiptInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).messageReceipt.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.MessageReceiptInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).messageReceipt.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.MessageReceiptInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).messageReceipt.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.MessageReceiptInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.MessageReceiptInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).messageReceipt.update(input as any)),
      ),

    count: procedure
      .input($Schema.MessageReceiptInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).messageReceipt.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.MessageReceiptCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.MessageReceiptCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MessageReceiptGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MessageReceiptGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MessageReceiptGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MessageReceiptGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.MessageReceiptDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.MessageReceiptDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MessageReceiptGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MessageReceiptGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MessageReceiptGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MessageReceiptGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.MessageReceiptFindFirstArgs,
      TData = Prisma.MessageReceiptGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.MessageReceiptFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.MessageReceiptGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MessageReceiptFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.MessageReceiptFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.MessageReceiptGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.MessageReceiptGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.MessageReceiptFindManyArgs,
      TData = Array<Prisma.MessageReceiptGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.MessageReceiptFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.MessageReceiptGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MessageReceiptFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.MessageReceiptFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.MessageReceiptGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.MessageReceiptGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.MessageReceiptFindUniqueArgs,
      TData = Prisma.MessageReceiptGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.MessageReceiptFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.MessageReceiptGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MessageReceiptFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.MessageReceiptFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.MessageReceiptGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.MessageReceiptGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.MessageReceiptUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.MessageReceiptUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.MessageReceiptUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.MessageReceiptGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.MessageReceiptGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.MessageReceiptUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.MessageReceiptUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.MessageReceiptGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.MessageReceiptGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.MessageReceiptCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.MessageReceiptCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.MessageReceiptCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.MessageReceiptCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.MessageReceiptCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.MessageReceiptCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.MessageReceiptCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.MessageReceiptCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
