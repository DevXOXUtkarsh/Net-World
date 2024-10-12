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
      .input($Schema.StatusUpdateInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.StatusUpdateInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.StatusUpdateInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.StatusUpdateInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.StatusUpdateInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).statusUpdate.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.StatusUpdateInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).statusUpdate.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.StatusUpdateInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).statusUpdate.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.StatusUpdateInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.StatusUpdateInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).statusUpdate.update(input as any)),
      ),

    count: procedure
      .input($Schema.StatusUpdateInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).statusUpdate.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.StatusUpdateCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateCreateManyArgs>(
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
    useMutation: <T extends Prisma.StatusUpdateCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.StatusUpdateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.StatusUpdateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.StatusUpdateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.StatusUpdateGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.StatusUpdateDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateDeleteManyArgs>(
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
    useMutation: <T extends Prisma.StatusUpdateDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.StatusUpdateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.StatusUpdateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.StatusUpdateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.StatusUpdateGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.StatusUpdateFindFirstArgs,
      TData = Prisma.StatusUpdateGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.StatusUpdateFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.StatusUpdateGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.StatusUpdateFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.StatusUpdateFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.StatusUpdateGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.StatusUpdateGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.StatusUpdateFindManyArgs,
      TData = Array<Prisma.StatusUpdateGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.StatusUpdateFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.StatusUpdateGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.StatusUpdateFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.StatusUpdateFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.StatusUpdateGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.StatusUpdateGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.StatusUpdateFindUniqueArgs,
      TData = Prisma.StatusUpdateGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.StatusUpdateFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.StatusUpdateGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.StatusUpdateFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.StatusUpdateFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.StatusUpdateGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.StatusUpdateGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.StatusUpdateUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateUpdateManyArgs>(
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
    useMutation: <T extends Prisma.StatusUpdateUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.StatusUpdateUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.StatusUpdateGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.StatusUpdateGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.StatusUpdateUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.StatusUpdateUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.StatusUpdateGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.StatusUpdateGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.StatusUpdateCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.StatusUpdateCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.StatusUpdateCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.StatusUpdateCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.StatusUpdateCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.StatusUpdateCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.StatusUpdateCountAggregateOutputType
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
              Prisma.StatusUpdateCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
